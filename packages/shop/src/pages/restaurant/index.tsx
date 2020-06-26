import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'utils/apollo';
import StoreNav from 'components/store-nav/store-nav';
import Carousel from 'components/carousel/carousel';
import { Banner } from 'components/banner/banner';
import Sidebar from 'layouts/sidebar/sidebar';
import Products from 'components/product-grid/product-list-two/product-list-two';
import {
  MainContentArea,
  SidebarSection,
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style';
// Static Data Import Here
import OFFERS from 'data/offers';
import BannerImg from 'assets/images/banner/restaurant.png';
import storeType from 'constants/storeType';
import { SEO } from 'components/seo';

const PAGE_TYPE = 'restaurant';

function HomePage({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <>
      <SEO title="Restaurant - PickBazar" description="Restaurant Details" />
      <Modal>
        <Banner
          intlTitleId="foodsTitle"
          intlDescriptionId="foodsSubTitle"
          imageUrl={BannerImg}
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
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
