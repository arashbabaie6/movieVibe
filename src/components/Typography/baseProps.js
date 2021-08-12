import { css } from 'styled-components';

export const margin = () =>
  css`
    margin: ${(props) => (props.margin ? props.margin : '')};
    margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : '')};
    margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '')};

    @media ${({ theme }) => theme.device.desktop} {
      margin: ${(props) => (props.marginD ? props.marginD : '')};
      margin-top: ${(props) => (props.marginTopD ? props.marginTopD : '')};
      margin-left: ${(props) => (props.marginLeftD ? props.marginLeftD : '')};
      margin-right: ${(props) =>
        props.marginRightD ? props.marginRightD : ''};
      margin-bottom: ${(props) =>
        props.marginBottomD ? props.marginBottomD : ''};
    }

    @media ${({ theme }) => theme.device.laptop} {
      margin: ${(props) => (props.marginL ? props.marginL : '')};
      margin-top: ${(props) => (props.marginTopL ? props.marginTopL : '')};
      margin-left: ${(props) => (props.marginLeftL ? props.marginLeftL : '')};
      margin-right: ${(props) =>
        props.marginRightL ? props.marginRightL : ''};
      margin-bottom: ${(props) =>
        props.marginBottomL ? props.marginBottomL : ''};
    }

    @media ${({ theme }) => theme.device.tablet} {
      margin: ${(props) => (props.marginT ? props.marginT : '')};
      margin-top: ${(props) => (props.marginTopT ? props.marginTopT : '')};
      margin-left: ${(props) => (props.marginLeftT ? props.marginLeftT : '')};
      margin-right: ${(props) =>
        props.marginRightT ? props.marginRightT : ''};
      margin-bottom: ${(props) =>
        props.marginBottomT ? props.marginBottomT : ''};
    }

    @media ${({ theme }) => theme.device.mobile} {
      margin: ${(props) => (props.marginM ? props.marginM : '')};
      margin-top: ${(props) => (props.marginTopM ? props.marginTopM : '')};
      margin-left: ${(props) => (props.marginLeftM ? props.marginLeftM : '')};
      margin-right: ${(props) =>
        props.marginRightM ? props.marginRightM : ''};
      margin-bottom: ${(props) =>
        props.marginBottomM ? props.marginBottomM : ''};
    }
  `;

export const padding = () =>
  css`
    padding: ${(props) => (props.padding ? props.padding : '')};
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '')};
    padding-right: ${(props) => (props.paddingRight ? props.paddingRight : '')};
    padding-bottom: ${(props) =>
      props.paddingBottom ? props.paddingBottom : ''};
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '')};

    @media ${({ theme }) => theme.device.desktop} {
      padding: ${(props) => (props.paddingD ? props.paddingD : '')};
      padding-top: ${(props) => (props.paddingTopD ? props.paddingTopD : '')};
      padding-left: ${(props) =>
        props.paddingLeftD ? props.paddingLeftD : ''};
      padding-right: ${(props) =>
        props.paddingRightD ? props.paddingRightD : ''};
      padding-bottom: ${(props) =>
        props.paddingBottomD ? props.paddingBottomD : ''};
    }

    @media ${({ theme }) => theme.device.laptop} {
      padding: ${(props) => (props.paddingL ? props.paddingL : '')};
      padding-top: ${(props) => (props.paddingTopL ? props.paddingTopL : '')};
      padding-left: ${(props) =>
        props.paddingLeftL ? props.paddingLeftL : ''};
      padding-right: ${(props) =>
        props.paddingRightL ? props.paddingRightL : ''};
      padding-bottom: ${(props) =>
        props.paddingBottomL ? props.paddingBottomL : ''};
    }

    @media ${({ theme }) => theme.device.tablet} {
      padding: ${(props) => (props.paddingT ? props.paddingT : '')};
      padding-top: ${(props) => (props.paddingTopT ? props.paddingTopT : '')};
      padding-left: ${(props) =>
        props.paddingLeftT ? props.paddingLeftT : ''};
      padding-right: ${(props) =>
        props.paddingRightT ? props.paddingRightT : ''};
      padding-bottom: ${(props) =>
        props.paddingBottomT ? props.paddingBottomT : ''};
    }

    @media ${({ theme }) => theme.device.mobile} {
      padding: ${(props) => (props.paddingM ? props.paddingM : '')};
      padding-top: ${(props) => (props.paddingTopM ? props.paddingTopM : '')};
      padding-left: ${(props) =>
        props.paddingLeftM ? props.paddingLeftM : ''};
      padding-right: ${(props) =>
        props.paddingRightM ? props.paddingRightM : ''};
      padding-bottom: ${(props) =>
        props.paddingBottomM ? props.paddingBottomM : ''};
    }
  `;

export const width = () =>
  css`
    width: ${(props) => (props.width ? props.width : '')};
    min-width: ${(props) => (props.minWidth ? props.minWidth : '')};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};

    @media ${({ theme }) => theme.device.desktop} {
      width: ${(props) => (props.widthD ? props.widthD : '')};
      min-width: ${(props) => (props.minWidthD ? props.minWidthD : '')};
      max-width: ${(props) => (props.maxWidthD ? props.maxWidthD : '')};
    }

    @media ${({ theme }) => theme.device.laptop} {
      width: ${(props) => (props.widthL ? props.widthL : '')};
      min-width: ${(props) => (props.minWidthL ? props.minWidthL : '')};
      max-width: ${(props) => (props.maxWidthL ? props.maxWidthL : '')};
    }

    @media ${({ theme }) => theme.device.tablet} {
      width: ${(props) => (props.widthT ? props.widthT : '')};
      min-width: ${(props) => (props.minWidthT ? props.minWidthT : '')};
      max-width: ${(props) => (props.maxWidthT ? props.maxWidthT : '')};
    }

    @media ${({ theme }) => theme.device.mobile} {
      width: ${(props) => (props.widthM ? props.widthM : '')};
      min-width: ${(props) => (props.minWidthM ? props.minWidthM : '')};
      max-width: ${(props) => (props.maxWidthM ? props.maxWidthM : '')};
    }
  `;

export const height = () =>
  css`
    height: ${(props) => (props.height ? props.height : '')};
    min-height: ${(props) => (props.minHeight ? props.minHeight : '')};
    max-height: ${(props) => (props.maxHeight ? props.maxHeight : '')};

    @media ${({ theme }) => theme.device.desktop} {
      height: ${(props) => (props.heightD ? props.heightD : '')};
      min-height: ${(props) => (props.minHeightD ? props.minHeightD : '')};
      max-height: ${(props) => (props.maxHeightD ? props.maxHeightD : '')};
    }

    @media ${({ theme }) => theme.device.laptop} {
      height: ${(props) => (props.heightL ? props.heightL : '')};
      min-height: ${(props) => (props.minHeightL ? props.minHeightL : '')};
      max-height: ${(props) => (props.maxHeightL ? props.maxHeightL : '')};
    }

    @media ${({ theme }) => theme.device.tablet} {
      height: ${(props) => (props.heightT ? props.heightT : '')};
      min-height: ${(props) => (props.minHeightT ? props.minHeightT : '')};
      max-height: ${(props) => (props.maxHeightT ? props.maxHeightT : '')};
    }

    @media ${({ theme }) => theme.device.mobile} {
      height: ${(props) => (props.heightM ? props.heightM : '')};
      min-height: ${(props) => (props.minHeightM ? props.minHeightM : '')};
      max-height: ${(props) => (props.maxHeightM ? props.maxHeightM : '')};
    }
  `;

export const color = (incomingColor = 'white') =>
  css`
    color: ${(props) =>
      !!props.theme.colors[incomingColor]
        ? props.theme.colors[incomingColor]
        : incomingColor};
  `;

export const weight = () => css`
  font-weight: ${(props) => (props.weight ? props.weight : '')};
`;

export const fontSize = () =>
  css`
    font-size: ${(props) => {
      switch (props.fontSize) {
        case 'title1':
          return '42px';
        case 'title2':
          return '34px';
        case 'title3':
          return '28px';
        case 'title4':
          return '22px';
        case 'title5':
          return '18px';
        case 'small':
          return '12px';
        case 'smallest':
          return '10px';
      }
      return props.fontSize ? props.fontSize : '14px';
    }};

    @media ${({ theme }) => theme.device.tablet} {
      font-size: ${(props) => {
        switch (props.fontSizeT) {
          case 'title1':
            return '34px';
          case 'title2':
            return '28px';
          case 'title3':
            return '22px';
          case 'title4':
            return '18px';
          case 'title5':
            return '16px';
          case 'small':
            return '12px';
          case 'smallest':
            return '10px';
        }
        return props.fontSize ? props.fontSizeT : '14px';
      }};
    }
  `;

export const lineHeight = () =>
  css`
    line-height: ${(props) => {
      switch (props.lineHeight) {
        case 'title1':
          return '56px';
        case 'title2':
          return '48px';
        case 'title3':
          return '40px';
        case 'title4':
          return '32px';
        case 'title5':
          return '24px';
        case 'small':
          return '16px';
        case 'smallest':
          return '16px';
      }
      return props.lineHeight ? props.lineHeight : '24px';
    }};

    @media ${({ theme }) => theme.device.tablet} {
      line-height: ${(props) => {
        switch (props.lineHeightT) {
          case 'title1':
            return '48px';
          case 'title2':
            return '40px';
          case 'title3':
            return '32px';
          case 'title4':
            return '24px';
          case 'title5':
            return '24px';
          case 'small':
            return '16px';
          case 'smallest':
            return '16px';
        }
        return props.fontSize ? props.lineHeightT : '24px';
      }};
    }
  `;

export const flex = () =>
  css`
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : '')};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : 'center'};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : ''};
    gap: ${(props) => (props.flexGap ? props.flexGap : '')};

    @media ${({ theme }) => theme.device.desktop} {
      flex-wrap: ${(props) => (props.flexWrapD ? props.flexWrapD : '')};
      justify-content: ${(props) =>
        props.justifyContentD ? props.justifyContentD : ''};
      align-items: ${(props) => (props.alignItemsD ? props.alignItemsD : '')};
      flex-direction: ${(props) =>
        props.flexDirectionD ? props.flexDirectionD : ''};
      gap: ${(props) => (props.flexGapD ? props.flexGapD : '')};
    }

    @media ${({ theme }) => theme.device.laptop} {
      flex-wrap: ${(props) => (props.flexWrapL ? props.flexWrapL : '')};
      justify-content: ${(props) =>
        props.justifyContentL ? props.justifyContentL : ''};
      align-items: ${(props) => (props.alignItemsL ? props.alignItemsL : '')};
      flex-direction: ${(props) =>
        props.flexDirectionL ? props.flexDirectionL : ''};
      gap: ${(props) => (props.flexGapL ? props.flexGapL : '')};
    }

    @media ${({ theme }) => theme.device.tablet} {
      flex-wrap: ${(props) => (props.flexWrapT ? props.flexWrapT : '')};
      justify-content: ${(props) =>
        props.justifyContentT ? props.justifyContentT : ''};
      align-items: ${(props) => (props.alignItemsT ? props.alignItemsT : '')};
      flex-direction: ${(props) =>
        props.flexDirectionT ? props.flexDirectionT : ''};
      gap: ${(props) => (props.flexGapT ? props.flexGapT : '')};
    }

    @media ${({ theme }) => theme.device.mobile} {
      flex-wrap: ${(props) => (props.flexWrapM ? props.flexWrapM : '')};
      justify-content: ${(props) =>
        props.justifyContentM ? props.justifyContentM : ''};
      align-items: ${(props) => (props.alignItemsM ? props.alignItemsM : '')};
      flex-direction: ${(props) =>
        props.flexDirectionM ? props.flexDirectionM : ''};
      gap: ${(props) => (props.flexGapM ? props.flexGapM : '')};
    }
  `;

export const display = () => css`
  display: ${(props) => (props.display ? props.display : '')};

  @media ${({ theme }) => theme.device.desktop} {
    display: ${(props) => (props.displayD ? props.displayD : '')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    display: ${(props) => (props.displayL ? props.displayL : '')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: ${(props) => (props.displayT ? props.displayT : '')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: ${(props) => props.displayM ? props.displayM : ''};
  }
`;

export const background = () => css`
  ${(props) => {
    return props.background
      ? css`
          background: ${props.theme.colors[props.background] ||
          props.background};
        `
      : '';
  }}

  @media ${({ theme }) => theme.device.desktop} {
    ${(props) => {
      return props.backgroundD
        ? css`
            background: ${props.theme.colors[props.backgroundD] ||
            props.backgroundD};
          `
        : '';
    }}
  }
  @media ${({ theme }) => theme.device.laptop} {
    ${(props) => {
      return props.backgroundL
        ? css`
            background: ${props.theme.colors[props.backgroundL] ||
            props.backgroundL};
          `
        : '';
    }}
  }
  @media ${({ theme }) => theme.device.tablet} {
    ${(props) => {
      return props.backgroundT
        ? css`
            background: ${props.theme.colors[props.backgroundT] ||
            props.backgroundT};
          `
        : '';
    }}
  }
  @media ${({ theme }) => theme.device.mobile} {
    ${(props) => {
      return props.backgroundM
        ? css`
            background: ${props.theme.colors[props.backgroundM] ||
            props.backgroundM};
          `
        : '';
    }}
  }
`;

export const border = () =>
  css`
    border: ${(props) => (props.border ? props.border : '')};
    border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};

    @media ${({ theme }) => theme.device.desktop} {
      border: ${(props) => (props.borderD ? props.borderD : '')};
      border-radius: ${(props) =>
        props.borderRadiusD ? props.borderRadiusD : ''};
    }

    @media ${({ theme }) => theme.device.laptop} {
      border: ${(props) => (props.borderL ? props.borderL : '')};
      border-radius: ${(props) =>
        props.borderRadiusL ? props.borderRadiusL : ''};
    }

    @media ${({ theme }) => theme.device.tablet} {
      border: ${(props) => (props.borderT ? props.borderT : '')};
      border-radius: ${(props) =>
        props.borderRadiusT ? props.borderRadiusT : ''};
    }

    @media ${({ theme }) => theme.device.mobile} {
      border: ${(props) => (props.borderM ? props.borderM : '')};
      border-radius: ${(props) =>
        props.borderRadiusM ? props.borderRadiusM : ''};
    }
  `;

export const align = () => css`
  text-align: ${(props) => (props.align ? props.align : '')};

  @media ${({ theme }) => theme.device.desktop} {
    text-align: ${(props) => (props.alignD ? props.alignD : '')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    text-align: ${(props) => (props.alignL ? props.alignL : '')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    text-align: ${(props) => (props.alignT ? props.alignT : '')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    text-align: ${(props) => (props.alignM ? props.alignM : '')};
  }
`;

export const cursor = () => css`
  cursor: ${(props) => (props.cursor ? props.cursor : '')};

  @media ${({ theme }) => theme.device.desktop} {
    cursor: ${(props) => (props.cursorD ? props.cursorD : '')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    cursor: ${(props) => (props.cursorL ? props.cursorL : '')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    cursor: ${(props) => (props.cursorT ? props.cursorT : '')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    cursor: ${(props) => (props.cursorM ? props.cursorM : '')};
  }
`;

export const overflow = () => css`
  overflow: ${(props) => (props.overflow ? props.overflow : '')};

  @media ${({ theme }) => theme.device.desktop} {
    overflow: ${(props) => (props.overflowD ? props.overflowD : '')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    overflow: ${(props) => (props.overflowL ? props.overflowL : '')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    overflow: ${(props) => (props.overflowT ? props.overflowT : '')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    overflow: ${(props) => (props.overflowM ? props.overflowM : '')};
  }
`;

export const flexGrow = () => css`
  flex-grow: ${(props) => (props.flexGrow ? props.flexGrow : '')};

  @media ${({ theme }) => theme.device.desktop} {
    flex-grow: ${(props) => (props.flexGrowD ? props.flexGrowD : '')};
  }
  @media ${({ theme }) => theme.device.laptop} {
    flex-grow: ${(props) => (props.flexGrowL ? props.flexGrowL : '')};
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-grow: ${(props) => (props.flexGrowT ? props.flexGrowT : '')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-grow: ${(props) => (props.flexGrowM ? props.flexGrowM : '')};
  }
`;
