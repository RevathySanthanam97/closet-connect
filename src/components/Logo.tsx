import "./Logo.scss"

const Logo = () => {
  return (
    <div className="logo">
      <img
        className="mobile-hide"
        src="https://storagefiles.clo-set.com/public/connect/common/connect-desktop-header-bi.svg"
      />
      <img
        className="desktop-hide"
        src="https://storagefiles.clo-set.com/public/connect/common/connect-bi-primary-high.png"
      />
    </div>
  )
}

export default Logo