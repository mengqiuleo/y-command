import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import  time  from '../src/time/Time.vue'
describe('y-commands', () => {
  it('should render', () => {
    mount(time)
  });
});