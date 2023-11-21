import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderCard from "../OrderCard/OrderCard";

const Order = ({ menu }) => {
  const [tabIndex, setTabIndex] = useState(0);

  // console.log(menu)

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="container mx-auto my-12 lg:my-32"
    >
      <TabList className="text-center uppercase font-medium lg:text-2xl text-black">
        <Tab>Salad</Tab>
        <Tab>Pizza</Tab>
        <Tab>Soups</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <OrderCard items={salads}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={pizza}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={soups}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={desserts}></OrderCard>
      </TabPanel>
      <TabPanel>
        <OrderCard items={drinks}></OrderCard>
      </TabPanel>
    </Tabs>
  );
};

export default Order;
