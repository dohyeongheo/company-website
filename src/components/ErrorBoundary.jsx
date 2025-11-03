import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from '../hooks/useTranslation'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error,
      errorInfo,
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} onReset={this.handleReset} />
    }

    return this.props.children
  }
}

const ErrorFallback = ({ error, onReset }) => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('error.title')} - Company</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy-900 mb-4">
              {t('error.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              {t('error.message')}
            </p>
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-6 text-left bg-gray-50 p-4 rounded-md border border-gray-200">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  {t('error.details')}
                </summary>
                <pre className="text-xs text-gray-600 overflow-auto">
                  {error.toString()}
                  {error.stack && `\n\n${error.stack}`}
                </pre>
              </details>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onReset}
              className="bg-navy-900 text-white px-8 py-3 rounded-md font-medium hover:bg-navy-800 transition-colors"
            >
              {t('error.reset')}
            </button>
            <a
              href="/"
              className="bg-gray-200 text-navy-900 px-8 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors inline-block"
            >
              {t('error.goHome')}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorBoundary

