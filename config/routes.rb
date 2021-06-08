# frozen_string_literal: true

Rails.application.routes.draw do
  root 'react_app#index'
  get '*path', to: 'react_app#index'
end
