import React, { useState } from "react";
import "react-grid-layout/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import Chart from "../../components/chart/Chart";

import { Box, Button, Card, Container, Typography } from "@material-ui/core";
import { Refresh, Save } from "@material-ui/icons";
import { initialCardState, initialGridLayouts } from "./dashboardInitialState";
import { useDispatch, useSelector } from "react-redux";
import {
  restoreDefaultGridLayout,
  saveGridLayout
} from "../../state/actions/dashboardGridActions";
import { getLayoutWithOnlyVisibleCards } from "./dashboardUtils";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  const storedDashboard = useSelector((state) => state.dashboardGrid);

  const [cards, setCards] = useState(
    [...storedDashboard.cardsState] || [...initialCardState]
  );
  const [layouts, setLayouts] = useState(
    { ...storedDashboard.gridLayout } || [...initialGridLayouts]
  );
  const [layoutChangedDateTime, setLayoutChangedDateTime] = useState(
    new Date()
  );

  const dispatch = useDispatch();

  const closeCard = (cardKey) => {
    const newCards = [...cards];
    const cardIndex = newCards.findIndex((card) => card.key === cardKey);
    newCards[cardIndex].visible = false;
    setCards(newCards);
  };

  const handleLayoutChange = (currentLayout, currentLayouts) => {
    setLayouts(currentLayouts);
    setLayoutChangedDateTime(new Date());
  };

  const saveLayout = () => {
    dispatch(saveGridLayout(layouts, cards));
  };
  const restoreLayout = (e) => {
    dispatch(restoreDefaultGridLayout());
    setCards(cards.map((card) => ({ ...card, visible: true })));
    setLayouts(initialGridLayouts);
    setLayoutChangedDateTime(new Date());
  };
  const getLayouts = () => {
    const visibleCardsLayout = getLayoutWithOnlyVisibleCards(layouts, cards);
    return visibleCardsLayout;
  };
  return (
    <Container>
      <Box width="100%" textAlign="right">
        <Button variant="outlined" startIcon={<Save />} onClick={saveLayout}>
          <Typography variant="body1">Save Layout</Typography>
        </Button>
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={restoreLayout}
        >
          <Typography variant="body1">Restore Layout</Typography>
        </Button>
      </Box>
      <ResponsiveReactGridLayout
        className="layout"
        rowHeight={100}
        cols={{ xxs: 1, xs: 1, sm: 1, md: 12, lg: 12 }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        width={"100%"}
        onLayoutChange={(layout, layouts) =>
          handleLayoutChange(layout, layouts)
        }
        layouts={getLayouts()}
      >
        {cards
          .filter((card) => card.visible === true)
          .map((card) => (
            <Card key={card.key}>
              <Chart
                title={card.title}
                type={card.chartType}
                layoutChangedTime={layoutChangedDateTime}
                isClosable={true}
                onClose={() => closeCard(card.key)}
              />
            </Card>
          ))}
      </ResponsiveReactGridLayout>
    </Container>
  );
}
