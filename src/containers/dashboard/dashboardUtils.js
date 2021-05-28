export const getLayoutWithOnlyVisibleCards = (layouts, cards) => {
  const visibleCardsLayout = layouts;
  if (visibleCardsLayout) {
    visibleCardsLayout.xxs = visibleCardsLayout.xxs
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);
    visibleCardsLayout.xs = visibleCardsLayout.xs
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);
    visibleCardsLayout.sm = visibleCardsLayout.sm
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);

    visibleCardsLayout.md = visibleCardsLayout.md
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);
    visibleCardsLayout.lg = visibleCardsLayout.lg
      .filter((item) => cards.find((c) => c.key === item.i)?.visible)
      .map((item) => item);
  }
  return visibleCardsLayout;
};
