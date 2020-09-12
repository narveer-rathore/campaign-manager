import React from 'react';
import DefaultLayout from '../../layouts/default';

import i18n from '../../i18n';

function App({ t }) {

    return (
      <DefaultLayout>
        <h1>{i18n.t("Manage Campaigns")}</h1>
      </DefaultLayout>
    );
}

export default App;
