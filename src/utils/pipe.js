const pipe = (...layers) => BaseComponent => ComponentProps => {
  const props = layers.reduce((prevLayerProps, layer) => {
    const currentLayerProps = layer.call(null, prevLayerProps)

    return {
      ...prevLayerProps,
      ...currentLayerProps,
      ...ComponentProps,
    }
  }, {})

  return <BaseComponent {...props} />
}

export default pipe
