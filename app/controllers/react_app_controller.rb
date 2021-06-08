# frozen_string_literal: true

class ReactAppController < ApplicationController
  layout "react_app"

  def index
    @ssr_enabled = ENV['SSR'] != '0';
    @react_app_props = {}
  end
end
