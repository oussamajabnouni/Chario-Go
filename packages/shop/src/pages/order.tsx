import React from 'react';
import { NextPage } from 'next';
import { SEO } from 'components/seo';
import Order from 'features/user-profile/order/order';
import {
  PageWrapper,
  SidebarSection,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { withApollo } from 'utils/apollo';
import { Modal } from '@redq/reuse-modal';

type Props = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const OrderPage: NextPage<Props> = ({ deviceType }) => {
  return (
    <>
      <SEO title="Order - Chario Go" description="Order Details" />
      <Modal>
        <PageWrapper>
          {deviceType.desktop && (
            <SidebarSection>
              <Sidebar />
            </SidebarSection>
          )}

          <Order deviceType={deviceType} />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default withApollo(OrderPage);
