# frozen_string_literal: true

require 'rails_helper'

describe ReactAppController do
  render_views

  it 'renders the react_app view on root path' do
    get :index
    expect(response).to render_template :react_app
  end
end
