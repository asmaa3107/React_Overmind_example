import { IContext } from 'overmind'
import { 
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook
} from 'overmind-react'

import {  namespaced } from 'overmind/config'

import * as posts from './posts'
import * as uins from './University'

export const config = 
  namespaced({
    posts,
    uins
  });
export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
export const useReaction = createReactionHook<Context>()


// import { state } from './University/state'
// import * as actions from './University/actions'
// import * as effects from './University/effects'
// export const config = {
//   state,
//   actions,effects
// }