import styled from "styled-components";
import Logo from "../ui/Logo"
import MainNav from "../ui/MainNav"
// import Uploader from "../data/Uploader";


const StylesSidebar= styled.aside`
  background-color: var(--color-grey-0);
  padding: 2.2rem 2.4rem;
  border-right: 2px solid var(--color-brand-600);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

function Sidebar() {
  return (
    <StylesSidebar>
      <Logo />
      <MainNav />
      {/* <Uploader/> */}
    </StylesSidebar>
  )
}

export default Sidebar
