/* @odoo-module */

import { registry } from "@web/core/registry";
import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";


patch(PosStore.prototype, {
   getReceiptHeaderData() {

    //    console.log('------------');
    //    console.log(this);
    //    console.log('------------');

       var ref = ""

       for (const orderline of this.selectedOrder.orderlines) {
            if (orderline.product.taxes_id && orderline.product.taxes_id.length > 0) {
                ref += orderline.full_product_name + ",";
            }
        }

       return {
           ...super.getReceiptHeaderData(...arguments),
           partner: this.get_order().get_partner(),
           ref: ref,
           orderlines_price_and_name: this.selectedOrder.orderlines.map(orderline => ({
            price: orderline.price,
            product_name: orderline.full_product_name,
            quantity: orderline.quantity
        })),
       };
   },
});