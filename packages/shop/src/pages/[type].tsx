import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'utils/apollo';
import StoreNav from 'components/store-nav/store-nav';
import Carousel from 'components/carousel/carousel';
import { Banner } from 'components/banner/banner';
import Sidebar from 'layouts/sidebar/sidebar';
import Products from 'components/product-grid/product-list/product-list';
import CartPopUp from 'features/carts/cart-popup';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import { PAGES_DATA } from 'data/pages';
import storeType from 'constants/storeType';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';

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
        <Banner
          intlTitleId={page?.banner_title_id}
          intlDescriptionId={page?.banner_description_id}
          imageUrl={page?.banner_image_url}
        />
        <MobileCarouselDropdown>
          <StoreNav items={storeType} />
          <Sidebar type={PAGE_TYPE} deviceType={deviceType} />
        </MobileCarouselDropdown>
        <OfferSection>
          <div style={{ margin: '0 -10px' }}>
            <Carousel deviceType={deviceType} data={OFFERS} />
          </div>
        </OfferSection>
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
