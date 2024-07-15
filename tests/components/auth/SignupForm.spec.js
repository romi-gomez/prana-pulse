import { shallowMount } from '@vue/test-utils';
import SignupForm from '@/components/auth/SignupForm.vue';
import { signUp } from '@/services/authService';

jest.mock('@/services/authService');

describe('SignupForm.vue', () => {
  it('signs up a user', async () => {
    signUp.mockResolvedValue({ email: 'test@example.com' });

    const wrapper = shallowMount(SignupForm);
    wrapper.setData({ email: 'test@example.com', password: 'password123' });
    await wrapper.find('form').trigger('submit.prevent');

    expect(signUp).toHaveBeenCalledWith('test@example.com', 'password123');
    expect(console.log).toHaveBeenCalledWith('Signed up user:', { email: 'test@example.com' });
  });
});