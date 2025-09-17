import HmnButton from "@/components/HmnButton";
import HmnDropdown from "@/components/HmnDropdown";


export default function Databases() {
  return (
    <div id="ims-content">
      <div id="functional-panel" className="container-flex">
        <section>
          <HmnDropdown label="Create" iconLeft="add" type="accent" alignment="left">
            <HmnButton label="Database" iconLeft="database" link="/databases/new" />
            <HmnButton label="Folder" iconLeft="addFolder" disabled={true} />
          </HmnDropdown>
        </section>
        <section>
          
        </section>
      </div>
    </div>
  );
}
