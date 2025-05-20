import React from "react";
import {
  Content,
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderSideNavItems,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
} from "@carbon/react";
import { useNavigate } from "react-router-dom";
import {
  Switcher as SwitcherIcon,
  Notification,
  Search,
} from "@carbon/icons-react";

export default function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="Carbon Dashboard">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
              aria-expanded={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="Carbon">
              Dashboard
            </HeaderName>
            <HeaderNavigation aria-label="Carbon Dashboard">
              <HeaderMenuItem onClick={() => navigate("/")}>
                Home
              </HeaderMenuItem>
              <HeaderMenuItem onClick={() => navigate("/about")}>
                About
              </HeaderMenuItem>
              <HeaderMenu aria-label="More" menuLinkName="More">
                <HeaderMenuItem
                  href="https://carbondesignsystem.com/"
                  target="_blank"
                >
                  Carbon Docs
                </HeaderMenuItem>
                <HeaderMenuItem
                  href="https://github.com/carbon-design-system/carbon"
                  target="_blank"
                >
                  GitHub
                </HeaderMenuItem>
              </HeaderMenu>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction aria-label="Search">
                <Search size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction aria-label="Notifications">
                <Notification size={20} />
              </HeaderGlobalAction>
              <HeaderGlobalAction
                aria-label="App Switcher"
                tooltipAlignment="end"
              >
                <SwitcherIcon size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              onSideNavBlur={onClickSideNavExpand}
              href="#main-content"
            >
              <SideNavItems>
                <HeaderSideNavItems hasDivider>
                  <HeaderMenuItem onClick={() => navigate("/")}>
                    Home
                  </HeaderMenuItem>
                  <HeaderMenuItem onClick={() => navigate("/about")}>
                    About
                  </HeaderMenuItem>
                </HeaderSideNavItems>
                <SideNavMenu title="Widgets">
                  <SideNavMenuItem href="#">Data Table</SideNavMenuItem>
                  <SideNavMenuItem href="#">Charts</SideNavMenuItem>
                  <SideNavMenuItem href="#">Tabs</SideNavMenuItem>
                </SideNavMenu>
                <SideNavLink
                  href="https://carbondesignsystem.com/"
                  target="_blank"
                >
                  Carbon Docs
                </SideNavLink>
              </SideNavItems>
            </SideNav>
          </Header>
          <Content
            id="main-content"
            className="cds--content"
            style={{ minHeight: "100vh", background: "#f4f4f4" }}
          >
            {children}
          </Content>
        </>
      )}
    />
  );
}
