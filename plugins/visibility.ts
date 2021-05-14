import Vue from 'vue'
import { ObserveVisibility } from 'vue-observe-visibility'
import 'intersection-observer'

Vue.directive('visible', ObserveVisibility)