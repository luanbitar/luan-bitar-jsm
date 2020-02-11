const pipe = (...layers) => BaseComponent => () => {
  const props = layers.reduce((prevProps, layer) => {
    const layerProps = layer.call(null, prevProps)

    return {
      ...prevProps,
      ...layerProps,
    }
  }, {})

  return <BaseComponent {...props} />
}

export default pipe
