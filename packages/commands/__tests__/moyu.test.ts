import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import  moyu  from '../src/moyu/MoYuBox.vue'
describe('y-commands', () => {
  it('should render', () => {
    mount(moyu)
  });
});