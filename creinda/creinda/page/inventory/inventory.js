frappe.pages["inventory"].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __("Inventory"),
		single_column: true,
	});
};

frappe.pages["inventory"].on_page_show = function (wrapper) {
	load_desk_page(wrapper);
};

function load_desk_page(wrapper) {
	let $parent = $(wrapper).find(".layout-main-section");
	$parent.empty();

	frappe.require("inventory.bundle.jsx").then(() => {
		frappe.inventory = new frappe.ui.Inventory({
			wrapper: $parent,
			page: wrapper.page,
		});
	});
}