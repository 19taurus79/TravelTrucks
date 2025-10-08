import Filters from "../Filters/Filters";
import LocationInput from "../Location/Location";
import SidebarContainer from "../SidebarContainer/SidebarContainer";

export default function Sidebar() {
  return (
    <SidebarContainer>
      <LocationInput />
      <Filters />
    </SidebarContainer>
  );
}
