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

        const orderlines = this.TICKET_SCREEN_STATE?.ui?.selectedOrder?.orderlines || this.selectedOrder.orderlines;

        if (orderlines) {
            for (const orderline of orderlines) {
                if (orderline.product.taxes_id && orderline.product.taxes_id.length > 0) {
                    for (const tax_id of orderline.product.taxes_id) {
                        console.log(tax_id)
                        ref += orderline.full_product_name + " " + this.taxes_by_id[tax_id].name + ",";
                    }
                }
            }
        } else {
            console.error("No orderlines available");
        }
    

       return {
           ...super.getReceiptHeaderData(...arguments),
           partner: this.get_order().get_partner(),
           ref: ref,
           orderlines_price_and_name: (this.TICKET_SCREEN_STATE?.ui?.selectedOrder?.orderlines || this.selectedOrder.orderlines).map(orderline => ({
            price: orderline.price,
            product_name: orderline.full_product_name,
            quantity: orderline.quantity
        })),
       };
   },
});