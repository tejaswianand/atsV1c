import React from "react";
import Navbar from "../resources/components/Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const Support = () => {
  return (
    <>
      <Navbar />
      <div className="page-title">Support</div>
      <div className="page-content">
        <div className="tabs">
          <Tabs align="center">
            <TabList>
              <Tab>Lost Your Application ID?</Tab>
              <Tab>Another Query?</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="apply-form">
                  <form>
                    <label for="email">Email ID</label>
                    <input type="email" id="email" name="email" />
                    <label for="jid">Job ID</label>
                    <input type="text" id="jid" name="jid" />
                    <button type="submit">
                      Submit &nbsp;
                      <i class="fa fa-external-link" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Support;
