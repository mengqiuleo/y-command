import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import  ping  from '../src/ping/PingShow.vue'
describe('y-commands', () => {
  it('should render', () => {
    mount(ping)
  });
});