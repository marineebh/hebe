import React from 'react';
import { renderDeep } from '../../../util/test-helpers';
import { createOwnListing, fakeIntl } from '../../../util/test-data';
import { ManageListingCardComponent } from './ManageListingCard';

const noop = () => null;

describe('ManageListingCard', () => {
  it('matches snapshot', () => {
    const tree = renderDeep(
      <ManageListingCardComponent
        history={{ push: noop }}
        listing={createOwnListing('listing1', { publicData: { listingType: 'sell-bikes' } })}
        intl={fakeIntl}
        isMenuOpen={false}
        onCloseListing={noop}
        onOpenListing={noop}
        onToggleMenu={noop}
        hasClosingError={false}
        hasOpeningError={false}
        availabilityEnabled={true}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});