import React from "react";
import { useRouter } from "next/router";
import { Modal } from "@redq/reuse-modal";
import { withApollo } from "utils/apollo";
import RestaurantFilters from "components/restaurant-filters/restaurant-filters";

import Sidebar from "layouts/sidebar/sidebar";
import Products from "components/product-grid/product-list-two/product-list-two";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  FilterSection,
} from "assets/styles/pages.style";
// Static Data Import Here
import OFFERS from "data/offers";
import { PAGES_DATA } from "data/pages";
import storeType from "constants/storeType";
import { SEO } from "components/seo";

const PAGE_TYPE = "restaurant";

function HomePage({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: "smooth",
      });
    }
  }, [query]);
  const page = PAGES_DATA[PAGE_TYPE];
  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />

      <Modal>
        <FilterSection>
          <RestaurantFilters />
        </FilterSection>
        <MainContentArea>
          <SidebarSection>
            <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
          </SidebarSection>
          <ContentSection>
            <div ref={targetRef}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </div>
          </ContentSection>
        </MainContentArea>
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
