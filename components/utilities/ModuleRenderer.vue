<script>
  export default {
    functional: true,

    render (createElement, context) {
      const component = (type) => {
        return {
          image: () => import('~/components/modules/InlineImage')
        }[type]
      }

      return createElement(
        component(context.props._type),
        context.data,
        context.children
      )
    }
  }

</script>
