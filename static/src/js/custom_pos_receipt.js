/* @odoo-module */

import { registry } from "@web/core/registry";
import { patch } from "@web/core/utils/patch";
import { PosStore } from "@point_of_sale/app/store/pos_store";

//setup() {
//    this.rpc = useService("rpc");
//};

//const result = await this.rpc("/hr_attendance/attendance_user_data");

//return this.rpc({
//    model: 'some.model',
//    method: 'some_method',
//    args: [some, args],
//});

patch(PosStore.prototype, {
   getReceiptHeaderData() {

       console.log('------------');
       console.log(this);
       console.log('------------');

       var ref = ""

       for (const orderline of this.selectedOrder.orderlines) {
            if (orderline.product.taxes_id && orderline.product.taxes_id.length > 0) {
                console.log(orderline.product.taxes_id);
                ref += orderline.full_product_name + ",";
            }
        }

       return {
           ...super.getReceiptHeaderData(...arguments),
           partner: this.get_order().get_partner(),
           ref: ref,
       };
   },
});