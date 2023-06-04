// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: poSKmt1KMDoYUF6h3Y78GP
// Component: DXgycBklpJeLWb

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_paradosiaki_agiografia.module.css"; // plasmic-import: poSKmt1KMDoYUF6h3Y78GP/projectcss
import sty from "./PlasmicLinkButton.module.css"; // plasmic-import: DXgycBklpJeLWb/css

export type PlasmicLinkButton__VariantMembers = {
  type:
    | "solidOrange"
    | "solidGray"
    | "blankOrange"
    | "outlineGray"
    | "blankGray";
  size: "small";
};
export type PlasmicLinkButton__VariantsArgs = {
  type?: SingleChoiceArg<
    "solidOrange" | "solidGray" | "blankOrange" | "outlineGray" | "blankGray"
  >;
  size?: SingleChoiceArg<"small">;
};
type VariantPropType = keyof PlasmicLinkButton__VariantsArgs;
export const PlasmicLinkButton__VariantProps = new Array<VariantPropType>(
  "type",
  "size"
);

export type PlasmicLinkButton__ArgsType = {
  href?: string;
  text?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLinkButton__ArgsType;
export const PlasmicLinkButton__ArgProps = new Array<ArgPropType>(
  "href",
  "text"
);

export type PlasmicLinkButton__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultLinkButtonProps {
  href?: string;
  text?: React.ReactNode;
  type?: SingleChoiceArg<
    "solidOrange" | "solidGray" | "blankOrange" | "outlineGray" | "blankGray"
  >;
  size?: SingleChoiceArg<"small">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLinkButton__RenderFunc(props: {
  variants: PlasmicLinkButton__VariantsArgs;
  args: PlasmicLinkButton__ArgsType;
  overrides: PlasmicLinkButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "#" as const
        },
        props.args
      ),
    [props.args]
  );
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
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.roottype_blankGray]: hasVariant($state, "type", "blankGray"),
          [sty.roottype_blankOrange]: hasVariant($state, "type", "blankOrange"),
          [sty.roottype_outlineGray]: hasVariant($state, "type", "outlineGray"),
          [sty.roottype_solidGray]: hasVariant($state, "type", "solidGray"),
          [sty.roottype_solidOrange]: hasVariant($state, "type", "solidOrange")
        }
      )}
      href={args.href}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Do the thing",
        value: args.text,
        className: classNames(sty.slotTargetText, {
          [sty.slotTargetTexttype_blankGray]: hasVariant(
            $state,
            "type",
            "blankGray"
          ),
          [sty.slotTargetTexttype_blankOrange]: hasVariant(
            $state,
            "type",
            "blankOrange"
          ),
          [sty.slotTargetTexttype_outlineGray]: hasVariant(
            $state,
            "type",
            "outlineGray"
          ),
          [sty.slotTargetTexttype_solidGray]: hasVariant(
            $state,
            "type",
            "solidGray"
          ),
          [sty.slotTargetTexttype_solidOrange]: hasVariant(
            $state,
            "type",
            "solidOrange"
          )
        })
      })}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLinkButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLinkButton__VariantsArgs;
    args?: PlasmicLinkButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLinkButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLinkButton__ArgsType,
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
          internalArgPropNames: PlasmicLinkButton__ArgProps,
          internalVariantPropNames: PlasmicLinkButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLinkButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLinkButton";
  } else {
    func.displayName = `PlasmicLinkButton.${nodeName}`;
  }
  return func;
}

export const PlasmicLinkButton = Object.assign(
  // Top-level PlasmicLinkButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLinkButton
    internalVariantProps: PlasmicLinkButton__VariantProps,
    internalArgProps: PlasmicLinkButton__ArgProps
  }
);

export default PlasmicLinkButton;
/* prettier-ignore-end */
