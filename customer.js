
const ordersList = document.getElementById("orders-list");
const dashboardMessage = document.getElementById("dashboard-message");
const totalOrders = document.getElementById("total-orders");
const totalSpent = document.getElementById("total-spent");

function formatPrice(amount) {
  return "KSh " + Number(amount).toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function addText(parent, tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;

  if (className) {
    element.className = className;
  }

  parent.appendChild(element);
  return element;
}

function displayOrders(orders) {
  ordersList.replaceChildren();
  totalOrders.textContent = orders.length;

  const paidAmount = orders
    .filter(order => order.payment_status === "paid")
    .reduce((sum, order) => sum + Number(order.total_amount), 0);

  totalSpent.textContent = formatPrice(paidAmount);

  if (orders.length === 0) {
    dashboardMessage.textContent =
      "You haven't placed any orders yet. Explore our artwork.";

    const shopLink = document.createElement("a");
    shopLink.href = "index.html#shop";
    shopLink.textContent = "Explore the collection";
    shopLink.className = "button button-red";

    ordersList.appendChild(shopLink);
    return;
  }

  dashboardMessage.textContent = "Here is your purchase history.";

  orders.forEach(order => {
    const orderCard = document.createElement("article");
    orderCard.className = "order-card";

    addText(orderCard, "h3", "Order #" + order.id);
    addText(
      orderCard,
      "p",
      "Date: " + new Date(order.created_at).toLocaleDateString("en-KE")
    );
    addText(orderCard, "p", "Order status: " + order.status);
    addText(orderCard, "p", "Payment status: " + order.payment_status);
    addText(orderCard, "h4", "Items");

    if (!order.order_items || order.order_items.length === 0) {
      addText(orderCard, "p", "No item details available.");
    } else {
      order.order_items.forEach(item => {
        const itemRow = document.createElement("div");
        itemRow.className = "order-item";

        addText(itemRow, "p", item.product_name);
        addText(itemRow, "p", "Quantity: " + item.quantity);
        addText(itemRow, "p", "Unit price: " + formatPrice(item.unit_price));
        addText(
          itemRow,
          "p",
          "Subtotal: " +
            formatPrice(Number(item.unit_price) * item.quantity)
        );

        orderCard.appendChild(itemRow);
      });
    }

    addText(
      orderCard,
      "h3",
      "Order total: " + formatPrice(order.total_amount)
    );

    ordersList.appendChild(orderCard);
  });
}

async function loadCustomerOrders() {
  dashboardMessage.textContent = "Checking your login...";
  ordersList.replaceChildren();

  try {
    const client = getSupabaseClient();
    const { data, error } = await client.auth.getSession();
    console.log("Dashboard session:", data.session);
console.log("Session check error:", error);

    if (error) {
      console.error("Session error:", error);
      dashboardMessage.textContent = "Could not check your login. Refresh and try again.";
      return;
    }

    const session = data.session;
    console.log("Customer session found:", Boolean(session));

    
if (!session) {
  window.location.href = "login.html";
  return;
}


    dashboardMessage.textContent = "Loading your purchases...";

    const { data: orders, error: ordersError } = await client
      .from("orders")
      .select(`
        id,
        total_amount,
        status,
        payment_status,
        created_at,
        order_items (
          product_name,
          quantity,
          unit_price
        )
      `)
      .eq("buyer_id", session.user.id)
      .order("created_at", { ascending: false });
      console.log("Orders returned:", orders);
console.log("Orders query error:", ordersError);

    if (ordersError) {
      console.error("Orders error:", ordersError);
      dashboardMessage.textContent =
        "You're logged in, but your purchases could not be loaded.";
      return;
    }

    displayOrders(orders || []);
  } catch (error) {
    console.error("Dashboard error:", error);
    dashboardMessage.textContent =
      "Something went wrong. Check the browser console.";
  }
}

loadCustomerOrders();
