const pipe = (...layers) => BaseComponent => ComponentProps => {
  const props = layers.reduce((prevLayerProps, layer) => {
    const currentLayerProps = layer.call(null, {
      ...ComponentProps,
      ...prevLayerProps,
    })

    return {
      ...ComponentProps,
      ...prevLayerProps,
      ...currentLayerProps,
    }
  }, {})

  return <BaseComponent {...props} />
}

export default pipe
