
const Page = require('./page');

class OrderHistory {

get MyOrders(){
    return $("div[class='panel wrapper'] li:nth-child(1) a:nth-child(1)")
}
get ViewOrder(){
    return $("td[class='col actions'] a[class='action view'] span")
}
async checkHistory() {
    
    await this.MyOrders.click();
    await this.ViewOrder.click();
}
}
module.exports = new OrderHistory();