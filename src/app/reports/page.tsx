import HmnButton from "@/components/HmnButton";
import HmnDropdown from "@/components/HmnDropdown";


export default function Reports() {
  return (
    <div id="ims-content">
      <div id="functional-panel" className="container-flex">
        <section>
          <HmnDropdown label="Create" iconLeft="add" type="accent" alignment="left">
            <HmnButton label="Report" iconLeft="report" disabled={true} />
            <HmnButton label="Folder" iconLeft="addFolder" disabled={true} />
          </HmnDropdown>
        </section>
        <section>
          
        </section>
      </div>
    </div>
  );
}
