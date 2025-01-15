# -*- coding: utf-8 -*-
{
    'name': "Madol Pos Receipt Xsellence",

    'summary': """
        Change default pos receipt design to Vx Pos Receipt""",

    'description': """
        Changes default to Vx Pos Receipt design
    """,

    'author': "s",
    'website': "https://xsellence-bangladesh-ltd.odoo.com/",

    'category': 'Point of Sale',
    'version': '1.0',

    'depends': ['point_of_sale'],
    'assets': {
        'point_of_sale._assets_pos': [
            'madol_pos_receipt_xsellence/static/src/xml/OrderReceipt.xml',
            'madol_pos_receipt_xsellence/static/src/js/custom_pos_receipt.js',
        ],
    },
    # 'images': ['static/description/images/receipt.jpg'],
    'price': 0.00,
    'currency': 'BDT',
    'installable': True,
    'auto_install': False,
    'license': 'OPL-1',
}
