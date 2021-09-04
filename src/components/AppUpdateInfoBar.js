import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, intlShape } from 'react-intl';

import InfoBar from './ui/InfoBar';
import { GITHUB_FERDI_URL } from '../config';
import { openExternalUrl } from '../helpers/url-helpers';

const messages = defineMessages({
  updateAvailable: {
    id: 'infobar.updateAvailable',
    defaultMessage: '!!!A new update for Ferdi is available.',
  },
  changelog: {
    id: 'infobar.buttonChangelog',
    defaultMessage: '!!!Changelog',
  },
  buttonInstallUpdate: {
    id: 'infobar.buttonInstallUpdate',
    defaultMessage: '!!!Restart & install update',
  },
});

class AppUpdateInfoBar extends Component {
  static propTypes = {
    onInstallUpdate: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  static contextTypes = {
    intl: intlShape,
  };

  render() {
    const { intl } = this.context;
    const { onInstallUpdate, onHide } = this.props;

    return (
      <InfoBar
        type="primary"
        ctaLabel={intl.formatMessage(messages.buttonInstallUpdate)}
        onClick={onInstallUpdate}
        onHide={onHide}
      >
        <span className="mdi mdi-information" />
        {intl.formatMessage(messages.updateAvailable)}{' '}
        <button
          className="info-bar__inline-button"
          type="button"
          onClick={() =>
            openExternalUrl(
              `${GITHUB_FERDI_URL}/ferdi/blob/develop/CHANGELOG.md`,
              true,
            )
          }
        >
          <u>{intl.formatMessage(messages.changelog)}</u>
        </button>
      </InfoBar>
    );
  }
}

export default AppUpdateInfoBar;
