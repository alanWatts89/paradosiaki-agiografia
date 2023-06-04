// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: poSKmt1KMDoYUF6h3Y78GP
// Component: gHHUVS8JC8e0nC

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import LinkButton from "../../LinkButton"; // plasmic-import: DXgycBklpJeLWb/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_paradosiaki_agiografia.module.css"; // plasmic-import: poSKmt1KMDoYUF6h3Y78GP/projectcss
import sty from "./PlasmicProductCarousel.module.css"; // plasmic-import: gHHUVS8JC8e0nC/css

import DotCircleOIcon from "./icons/PlasmicIcon__DotCircleO"; // plasmic-import: EzJBJEGXuf3HeO/icon
import CircleOIcon from "./icons/PlasmicIcon__CircleO"; // plasmic-import: VP6xV8qI_SCHDN/icon

export type PlasmicProductCarousel__VariantMembers = {
  slider: "first" | "second" | "third";
};
export type PlasmicProductCarousel__VariantsArgs = {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
};
type VariantPropType = keyof PlasmicProductCarousel__VariantsArgs;
export const PlasmicProductCarousel__VariantProps = new Array<VariantPropType>(
  "slider"
);

export type PlasmicProductCarousel__ArgsType = {};
type ArgPropType = keyof PlasmicProductCarousel__ArgsType;
export const PlasmicProductCarousel__ArgProps = new Array<ArgPropType>();

export type PlasmicProductCarousel__OverridesType = {
  root?: p.Flex<"div">;
  linkButton?: p.Flex<typeof LinkButton>;
};

export interface DefaultProductCarouselProps {
  slider?: SingleChoiceArg<"first" | "second" | "third">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicProductCarousel__RenderFunc(props: {
  variants: PlasmicProductCarousel__VariantsArgs;
  args: PlasmicProductCarousel__ArgsType;
  overrides: PlasmicProductCarousel__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "slider",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.slider
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__cHcSm)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rTqZ1, {
            [sty.freeBoxslider_second__rTqZ1WdXGu]: hasVariant(
              $state,
              "slider",
              "second"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mr4OO
            )}
          >
            {"Great Design Collection"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___8UU,
              {
                [sty.textslider_first___8UUiz4P7]: hasVariant(
                  $state,
                  "slider",
                  "first"
                ),
                [sty.textslider_second___8UUWdXGu]: hasVariant(
                  $state,
                  "slider",
                  "second"
                ),
                [sty.textslider_third___8UUlytdx]: hasVariant(
                  $state,
                  "slider",
                  "third"
                )
              }
            )}
          >
            {hasVariant($state, "slider", "third")
              ? "Valvet Accent Arm Chair"
              : hasVariant($state, "slider", "second")
              ? "Mapple Wood Accent Chair"
              : "Cloth Covered Accent Chair"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__xHnJc
            )}
          >
            {
              "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
            }
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gApXi)}
          >
            <LinkButton
              data-plasmic-name={"linkButton"}
              data-plasmic-override={overrides.linkButton}
              className={classNames("__wab_instance", sty.linkButton)}
              text={"⊕ Add to cart"}
              type={"solidOrange" as const}
            />
          </p.Stack>
        </p.Stack>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__p1BR3)}
      >
        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "third")
              ? CircleOIcon
              : hasVariant($state, "slider", "second")
              ? CircleOIcon
              : DotCircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__jWtT, {
            [sty.svgslider_second__jWtTWdXGu]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__jWtTLytdx]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "second")
              ? DotCircleOIcon
              : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__my8De, {
            [sty.svgslider_first__my8Deiz4P7]: hasVariant(
              $state,
              "slider",
              "first"
            ),
            [sty.svgslider_second__my8DeWdXGu]: hasVariant(
              $state,
              "slider",
              "second"
            ),
            [sty.svgslider_third__my8DeLytdx]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />

        <p.PlasmicIcon
          PlasmicIconType={
            hasVariant($state, "slider", "third") ? DotCircleOIcon : CircleOIcon
          }
          className={classNames(projectcss.all, sty.svg__pCmnx, {
            [sty.svgslider_third__pCmnxLytdx]: hasVariant(
              $state,
              "slider",
              "third"
            )
          })}
          role={"img"}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "linkButton"],
  linkButton: ["linkButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  linkButton: typeof LinkButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCarousel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCarousel__VariantsArgs;
    args?: PlasmicProductCarousel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCarousel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProductCarousel__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProductCarousel__ArgProps,
          internalVariantPropNames: PlasmicProductCarousel__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProductCarousel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCarousel";
  } else {
    func.displayName = `PlasmicProductCarousel.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCarousel = Object.assign(
  // Top-level PlasmicProductCarousel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    linkButton: makeNodeComponent("linkButton"),

    // Metadata about props expected for PlasmicProductCarousel
    internalVariantProps: PlasmicProductCarousel__VariantProps,
    internalArgProps: PlasmicProductCarousel__ArgProps
  }
);

export default PlasmicProductCarousel;
/* prettier-ignore-end */
