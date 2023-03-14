import React from 'react'
import { Router } from 'react-router-dom'
import { render } from 'react-dom'

import App from '_client/App'
import accountService from '_client/services/accountService'
import history from '_client/router/history'

import '_client/styles/index.scss'

// attempt silent token refresh before startup
try {
    accountService.refreshToken()
} catch (error) {
} finally {
    startApp()
}

function startApp() {
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('app')
    )
}