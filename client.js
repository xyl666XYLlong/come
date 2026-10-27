window.__ModuleLoader__.load({
  id: 'come',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const badgeStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '2px 10px',
      borderRadius: '999px',
      fontSize: '12px',
      lineHeight: '18px',
      fontVariantNumeric: 'tabular-nums',
      color: 'inherit',
      opacity: 0.62,
      background: 'rgba(127, 127, 127, 0.12)',
      pointerEvents: 'none',
      userSelect: 'none',
    };

    const dotStyle = {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#3fb950',
      flex: '0 0 auto',
    };

    function ComeBadge() {
      return h(
        'div',
        { style: badgeStyle, title: 'come · loaded' },
        h('span', { 'aria-hidden': true, style: dotStyle }),
        'come',
      );
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('conversation.composer.dock', () =>
          ctx.slots.register(
            {
              name: 'conversation.composer.dock',
              id: 'come',
              order: 9,
              label: 'come',
            },
            ComeBadge,
          ),
        );
      },
    };
  },
});
