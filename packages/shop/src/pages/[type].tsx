import React from "react";
import { useRouter } from "next/router";
import { Modal } from "@redq/reuse-modal";
import { withApollo } from "utils/apollo";
import ProductFilters from "components/product-filters/product-filters";
import Sidebar from "layouts/sidebar/sidebar";
import Products from "components/product-grid/product-list/product-list";
import CartPopUp from "features/carts/cart-popup";
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  FilterSection,
} from "assets/styles/pages.style";
// Static Data Import Here
import { PAGES_DATA } from "data/pages";
import { SEO } from "components/seo";
import { useRefScroll } from "utils/use-ref-scroll";

const CategoryPage: React.FC<any> = ({ deviceType }) => {
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });
  React.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE: any = query.type;
  const page = PAGES_DATA[PAGE_TYPE];
  return (
    <>
      <SEO title={page?.page_title} description={page?.page_description} />

      <Modal>
        <FilterSection>
          <ProductFilters />
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
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
};

export default withApollo(CategoryPage);
