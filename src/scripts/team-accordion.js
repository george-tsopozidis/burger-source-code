const openItem = (item) => {
  const container = item.closest(".team-item");
  const contentBlock = container.find(".team-item__content");
  const textBlock = contentBlock.find(".content-block");
  const reqHeight = textBlock.height();

  container.addClass("active");
  contentBlock.height(reqHeight);
};

const closeEveryItem = (container) => {
  const items = container.find(".team-item__content");
  const itemContainer = container.find(".team-item");

  itemContainer.removeClass("active");
  items.height(0);
};

$(".team-item__title").click((e) => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team");
  const elemContainer = $this.closest(".team-item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});
