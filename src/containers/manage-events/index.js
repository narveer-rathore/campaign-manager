import React from 'react';
import { withTranslation } from 'react-i18next';

import DefaultLayout from '../../layouts/default';

function App({ t }) {
    return (
      <DefaultLayout>
        <h1>{t("Manage Campaigns")}</h1>
      </DefaultLayout>
    );
}

export default withTranslation()(App);
