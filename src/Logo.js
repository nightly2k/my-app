const logo = {
  name: '로고',
  imageURL: '/logo192.png',
  imageSize: 100
};

function Logo() {
  <div className="logo">
    <img
      className='logo'
      src={logo.imageURL}
      alt={logo.name}
      style={{
        width: logo.imageSize,
        borderRadius: '100%',
        border: '5px solid skyblue'
      }}
    ></img>
  </div>
}

export default Logo;