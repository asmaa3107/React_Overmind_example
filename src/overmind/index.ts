import { IContext } from 'overmind'
import { 
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook
} from 'overmind-react'
import { state } from './University/states'
import * as actions from './University/actions'
import * as effects from './University/effects'

export const config = {
  state,
  actions,effects
}

export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
export const useReaction = createReactionHook<Context>()