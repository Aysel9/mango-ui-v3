import { Tab } from "@headlessui/react";

function Tabs1() {
  return (
    <Tab.Group>
      <Tab.List className="TabList">
        <Tab className="Tab">
          {({ selected }) => (
            <div className={selected ? "tabactive" : null}
             style={{borderBottom: selected ? "1px solid #CCC51B"  : "1px solid #888888"}}
            >Tab 1</div>
          )}
        </Tab>
        <Tab className="Tab">
          {({ selected }) => (
            <div className={selected ? "tabactive" : null}
             style={{borderBottom: selected ? "1px solid #CCC51B"  : "1px solid #888888"}}
            >Tab 2</div>
          )}
        </Tab>
        <Tab className="Tab">
          {({ selected }) => (
            <div className={selected ? "tabactive" : null}
             style={{borderBottom: selected ? "1px solid #CCC51B"  : "1px solid #888888"}}
            >Tab 3</div>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1

        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Tabs1;
