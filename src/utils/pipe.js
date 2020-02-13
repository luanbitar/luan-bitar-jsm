const pipe = (...layers) => BaseComponent => ComponentProps => {
  const props = layers.reduce((prevProps, layer) => {
    const layerProps = layer.call(null, prevProps)

    return {
      ...prevProps,
      ...layerProps,
    }
  }, {})

  return <BaseComponent {...props} {...ComponentProps} />
}

export default pipe
