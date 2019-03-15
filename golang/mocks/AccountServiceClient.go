// Code generated by mockery v1.0.0. DO NOT EDIT.

package mocks

import context "context"
import golang "github.com/metrix-io/proto/golang"
import grpc "google.golang.org/grpc"
import mock "github.com/stretchr/testify/mock"

// AccountServiceClient is an autogenerated mock type for the AccountServiceClient type
type AccountServiceClient struct {
	mock.Mock
}

// CancelAccount provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) CancelAccount(ctx context.Context, in *golang.CancelAccountRequest, opts ...grpc.CallOption) (*golang.CancelAccountResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.CancelAccountResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.CancelAccountRequest, ...grpc.CallOption) *golang.CancelAccountResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.CancelAccountResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.CancelAccountRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CheckCredentials provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) CheckCredentials(ctx context.Context, in *golang.CheckCredentialsRequest, opts ...grpc.CallOption) (*golang.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.Account
	if rf, ok := ret.Get(0).(func(context.Context, *golang.CheckCredentialsRequest, ...grpc.CallOption) *golang.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.Account)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.CheckCredentialsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CheckEmail provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) CheckEmail(ctx context.Context, in *golang.CheckEmailRequest, opts ...grpc.CallOption) (*golang.CheckEmailResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.CheckEmailResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.CheckEmailRequest, ...grpc.CallOption) *golang.CheckEmailResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.CheckEmailResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.CheckEmailRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CheckUsername provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) CheckUsername(ctx context.Context, in *golang.CheckUsernameRequest, opts ...grpc.CallOption) (*golang.CheckUsernameResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.CheckUsernameResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.CheckUsernameRequest, ...grpc.CallOption) *golang.CheckUsernameResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.CheckUsernameResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.CheckUsernameRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateAccount provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) CreateAccount(ctx context.Context, in *golang.CreateAccountRequest, opts ...grpc.CallOption) (*golang.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.Account
	if rf, ok := ret.Get(0).(func(context.Context, *golang.CreateAccountRequest, ...grpc.CallOption) *golang.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.Account)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.CreateAccountRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ForgotPassword provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) ForgotPassword(ctx context.Context, in *golang.ForgotPasswordRequest, opts ...grpc.CallOption) (*golang.ForgotPasswordResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.ForgotPasswordResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.ForgotPasswordRequest, ...grpc.CallOption) *golang.ForgotPasswordResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.ForgotPasswordResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.ForgotPasswordRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetAccountByID provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) GetAccountByID(ctx context.Context, in *golang.GetAccountByIDRequest, opts ...grpc.CallOption) (*golang.Account, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.Account
	if rf, ok := ret.Get(0).(func(context.Context, *golang.GetAccountByIDRequest, ...grpc.CallOption) *golang.Account); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.Account)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.GetAccountByIDRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ResendVerification provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) ResendVerification(ctx context.Context, in *golang.ResendVerificationRequest, opts ...grpc.CallOption) (*golang.ResendVerificationResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.ResendVerificationResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.ResendVerificationRequest, ...grpc.CallOption) *golang.ResendVerificationResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.ResendVerificationResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.ResendVerificationRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ResetPassword provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) ResetPassword(ctx context.Context, in *golang.ResetPasswordRequest, opts ...grpc.CallOption) (*golang.ResetPasswordResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.ResetPasswordResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.ResetPasswordRequest, ...grpc.CallOption) *golang.ResetPasswordResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.ResetPasswordResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.ResetPasswordRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdatePassword provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) UpdatePassword(ctx context.Context, in *golang.UpdatePasswordRequest, opts ...grpc.CallOption) (*golang.UpdatePasswordResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.UpdatePasswordResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.UpdatePasswordRequest, ...grpc.CallOption) *golang.UpdatePasswordResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.UpdatePasswordResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.UpdatePasswordRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// VerifyEmail provides a mock function with given fields: ctx, in, opts
func (_m *AccountServiceClient) VerifyEmail(ctx context.Context, in *golang.VerifyEmailRequest, opts ...grpc.CallOption) (*golang.VerifyEmailResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *golang.VerifyEmailResponse
	if rf, ok := ret.Get(0).(func(context.Context, *golang.VerifyEmailRequest, ...grpc.CallOption) *golang.VerifyEmailResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*golang.VerifyEmailResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *golang.VerifyEmailRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
