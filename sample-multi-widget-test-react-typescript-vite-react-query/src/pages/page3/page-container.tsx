import React from 'react'
const viteIcon = new URL('/public/vite.svg', import.meta.url).href

function PageContainer() {
  return (
    <div>
      <img src={viteIcon} alt="vite-icon" />
      <h1 data-testid="page-container">Page 3</h1>
    </div>
  )
}

export default PageContainer
